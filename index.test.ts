import { describe, it, expect, afterAll, beforeAll, test } from "bun:test";
import { spawn } from "child_process";
import axios from 'axios'

import { createApp } from './index.ts';
import { startServer } from './index.ts';

test('Hello World response', async () => {
  const app = createApp();
  const response = await axios.get('http://localhost:3000/');
  expect(response.data).toBe('Hello World!');
});
