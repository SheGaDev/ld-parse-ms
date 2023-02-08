export type resultParseMS = {
    years: number,
    months: number,
    weeks: number,
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
    milliseconds: number
}

export function formatTime(milliseconds: number, mark: boolean, args: string[] | []): string;
export function formattingDiscordTimestamp(milliseconds: number, style?: string): string;
export function parseMilliseconds<T extends keyof resultParseMS>(milliseconds: number, args: T[]): Record<T, number>;