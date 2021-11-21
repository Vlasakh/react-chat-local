import { v4 as uuidv4 } from 'uuid';

export async function apiGetAuthId() {
  const id = uuidv4();

  return {
    id,
  };
}
