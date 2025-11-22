import crypto from 'crypto'

export default function random4DigitsSecure() {
  return crypto.randomInt(1000, 10000); // borne supérieure exclusive
}


