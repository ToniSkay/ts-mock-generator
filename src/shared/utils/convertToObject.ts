export function convertToObject(data: string) {
  const json = data.replace(/\s/g, '')
    .replace(/\n/g, '')
    .replace(/\?/g, '')
    .replace(/=/g, ':')
    .replace(/\|/g, '')
    .replace(/undefined/g, '')
    .replace(/;(?=})/g, '')
    .replace(/,(?=})/g, '')
    .replace(/;/g, ',')
    .replace('export default', '')
    .replace(/(\r\n|\n|\r)/gm, '')
    .replace(/ /g, '')
    .replace(/"/g, '')
    .replace(/'/g, '')
    .replace(/{/g, '{"')
    .replace(/}/g, '"}')
    .replace(/:/g, '":"')
    .replace(/,/g, '","')
    .replace(/:"{/g, ':{')
    .replace(/}"}/g, '}}')
    .replace(/}","{/g, '},{')
    .replace(/]"}/g, ']}')
    .replace(/:"\[/g, ':["')
    .replace(/]",/g, '],')
    .replace(/],/g, '"],')
    .replace(/]}/g, '"]}')
    .replace(/\(/g, '("')
    .replace(/\)/g, '")')
    .replace(/"{/g, '{')
    .replace(/}"/g, '}');
  const obj = JSON.parse(json);
  Object.keys(obj).forEach((k) => {
    const int = parseInt(obj[k], 10);
    if (!Number.isNaN(int) && typeof (obj[k]) !== 'object') {
      obj[k] = int;
    }
  });
  return obj;
}
