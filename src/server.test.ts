import { describe, it, expect, afterAll, beforeAll, test } from "bun:test";
import { spawn } from "child_process";
import axios from 'axios'

import { createApp } from './server.ts';
import { startServer } from './server.ts';

test('Hello World response', async () => {
  const app = startServer(4100);
  const response = await axios.get('http://localhost:4100/');
  expect(response.data).toBe('Hello World!');
});
