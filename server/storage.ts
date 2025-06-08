import { users, serverStats, downloads, type User, type InsertUser, type ServerStats, type InsertServerStats, type Download, type InsertDownload } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getServerStats(): Promise<ServerStats | undefined>;
  updateServerStats(stats: InsertServerStats): Promise<ServerStats>;
  getDownloads(): Promise<Download[]>;
  createDownload(download: InsertDownload): Promise<Download>;
  incrementDownloadCount(id: number): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getServerStats(): Promise<ServerStats | undefined> {
    const [stats] = await db.select().from(serverStats).orderBy(desc(serverStats.lastUpdated)).limit(1);
    return stats || undefined;
  }

  async updateServerStats(stats: InsertServerStats): Promise<ServerStats> {
    const [updatedStats] = await db
      .insert(serverStats)
      .values(stats)
      .returning();
    return updatedStats;
  }

  async getDownloads(): Promise<Download[]> {
    return await db.select().from(downloads).orderBy(desc(downloads.createdAt));
  }

  async createDownload(download: InsertDownload): Promise<Download> {
    const [newDownload] = await db
      .insert(downloads)
      .values(download)
      .returning();
    return newDownload;
  }

  async incrementDownloadCount(id: number): Promise<void> {
    await db
      .update(downloads)
      .set({ downloadCount: downloads.downloadCount + 1 })
      .where(eq(downloads.id, id));
  }
}

export const storage = new DatabaseStorage();
