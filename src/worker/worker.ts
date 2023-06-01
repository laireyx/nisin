import WorkerBridge from '@utils/worker/worker';
import { WheelMessage } from './types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const bridge = new WorkerBridge<WheelMessage>();
