CREATE TABLE "users" (
	"id" text PRIMARY KEY NOT NULL,
	"username" varchar(32) NOT NULL,
	"created_at" timestamp DEFAULT now()
);
