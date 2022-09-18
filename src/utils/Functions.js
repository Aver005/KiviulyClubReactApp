export function FormatGetRequest(url, data)
{
    url += "?";
    Object.keys(data).forEach((key) => url += key + "=" + data[key] + "&")
    url = url.substring(0, url.length - 1);
    return url;
}