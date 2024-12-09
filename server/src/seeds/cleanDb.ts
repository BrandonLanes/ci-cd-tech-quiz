import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    // Ensure the model exists
    const model = models[modelName];
    if (!model || !model.db || !model.db.db) {
      throw new Error(`Model '${modelName}' or its 'db' property chain is not defined.`);
    }

    // Access collections and check existence
    const collections = await model.db.db.listCollections({ name: collectionName }).toArray();
    if (collections.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
};