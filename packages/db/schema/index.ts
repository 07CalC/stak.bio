import { pgTable, varchar, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: text('id').primaryKey(),
  username: varchar('username', { length: 32 }).notNull(),
  createdAt: timestamp('created_at').defaultNow()
});
