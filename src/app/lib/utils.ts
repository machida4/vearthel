export const formatDate = (date: `${number}-${number}-${number}T${number}:${number}:${number}Z`) => new Date(date).toLocaleDateString(
  'en-US',
  {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  },
);
