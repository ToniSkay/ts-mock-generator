export function generateSystemName(): string {
  return 'xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx'.replace(/[xy]/g, (c: string) => {
    const random: number = Math.round(Math.random() * 16);
    const value: number = c === 'x' ? random : (random & 0x3) | 0x8;

    return value.toString(16);
  });
}
