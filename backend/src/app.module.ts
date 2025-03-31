import { Module } from "@nestjs/common";
import { AttractionModule } from "./attraction/attraction.module";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./database/postgres/database.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "node:path";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, "static"),
    }),
    DatabaseModule,
    AttractionModule,
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
