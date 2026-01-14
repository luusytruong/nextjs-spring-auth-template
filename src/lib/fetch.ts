const apiFetch = async (url: string, options?: RequestInit) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API + url, options);
  return response;
};

export default apiFetch;
