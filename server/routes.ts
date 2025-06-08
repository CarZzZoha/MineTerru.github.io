import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertServerStatsSchema, insertDownloadSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Server stats routes
  app.get("/api/server-stats", async (req, res) => {
    try {
      const stats = await storage.getServerStats();
      if (!stats) {
        // Return default stats if none exist
        res.json({
          playersOnline: 0,
          maxPlayers: 150,
          uptime: "0 days",
          version: "1.20.1",
          lastUpdated: new Date()
        });
      } else {
        res.json(stats);
      }
    } catch (error) {
      console.error("Error fetching server stats:", error);
      res.status(500).json({ error: "Failed to fetch server stats" });
    }
  });

  app.post("/api/server-stats", async (req, res) => {
    try {
      const validatedData = insertServerStatsSchema.parse(req.body);
      const stats = await storage.updateServerStats(validatedData);
      res.json(stats);
    } catch (error) {
      console.error("Error updating server stats:", error);
      res.status(400).json({ error: "Invalid server stats data" });
    }
  });

  // Downloads routes
  app.get("/api/downloads", async (req, res) => {
    try {
      const downloads = await storage.getDownloads();
      res.json(downloads);
    } catch (error) {
      console.error("Error fetching downloads:", error);
      res.status(500).json({ error: "Failed to fetch downloads" });
    }
  });

  app.post("/api/downloads", async (req, res) => {
    try {
      const validatedData = insertDownloadSchema.parse(req.body);
      const download = await storage.createDownload(validatedData);
      res.json(download);
    } catch (error) {
      console.error("Error creating download:", error);
      res.status(400).json({ error: "Invalid download data" });
    }
  });

  app.post("/api/downloads/:id/increment", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.incrementDownloadCount(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error incrementing download count:", error);
      res.status(500).json({ error: "Failed to increment download count" });
    }
  });

  // Users routes
  app.get("/api/users/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const user = await storage.getUser(id);
      if (!user) {
        res.status(404).json({ error: "User not found" });
      } else {
        // Don't return password
        const { password, ...userWithoutPassword } = user;
        res.json(userWithoutPassword);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ error: "Failed to fetch user" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
