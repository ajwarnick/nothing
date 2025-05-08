export function buildParams(search){
    if (!search) return "";
  
    const params = new URLSearchParams();
  
    Object.entries(search).forEach(([key, value]) => {
      if (Array.isArray(value)) params.append(key, value.join(",,,"));
      else params.append(key, encodeURIComponent(value.toString()));
    });
  
    return `?${params}`;
}