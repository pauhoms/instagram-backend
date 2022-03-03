import { Collection, MongoClient } from "mongodb";

import { AggregateRoot } from "../../../domain/AggregateRoot";

export abstract class MongoRepository<T extends AggregateRoot> {
  constructor(private _client: Promise<MongoClient>) {}

  protected abstract moduleName(): string;

  protected client(): Promise<MongoClient> {
    return this._client;
  }

  protected async collection(): Promise<Collection> {
    return (await this._client).db("instagram").collection(this.moduleName());
  }

  protected async persist(id: string, aggregateRoot: T): Promise<void> {
    const collection = await this.collection();

    const document = {
      ...aggregateRoot.toPrimitives(),
    };

    await collection.updateOne(
      { _id: id },
      { $set: document },
      { upsert: true }
    );
  }
}
