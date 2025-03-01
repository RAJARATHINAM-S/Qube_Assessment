interface EndPoint {
  url?: string;
}

export const end_points: Record<string, EndPoint> = {
  music_Collection_Api: { url: 'collections' },
};
