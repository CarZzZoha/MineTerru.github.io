import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  discordId: text("discord_id"),
  isActive: boolean("is_active").default(true),
  joinedAt: timestamp("joined_at").defaultNow(),
});

export const serverStats = pgTable("server_stats", {
  id: serial("id").primaryKey(),
  playersOnline: integer("players_online").notNull(),
  maxPlayers: integer("max_players").notNull(),
  uptime: text("uptime").notNull(),
  version: text("version").notNull(),
  lastUpdated: timestamp("last_updated").defaultNow(),
});

export const downloads = pgTable("downloads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  downloadUrl: text("download_url").notNull(),
  version: text("version").notNull(),
  fileSize: text("file_size"),
  downloadCount: integer("download_count").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  discordId: true,
});

export const insertServerStatsSchema = createInsertSchema(serverStats).pick({
  playersOnline: true,
  maxPlayers: true,
  uptime: true,
  version: true,
});

export const insertDownloadSchema = createInsertSchema(downloads).pick({
  name: true,
  description: true,
  downloadUrl: true,
  version: true,
  fileSize: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertServerStats = z.infer<typeof insertServerStatsSchema>;
export type ServerStats = typeof serverStats.$inferSelect;
export type InsertDownload = z.infer<typeof insertDownloadSchema>;
export type Download = typeof downloads.$inferSelect;
