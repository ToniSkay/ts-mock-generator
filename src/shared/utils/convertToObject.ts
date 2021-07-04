export function convertToObject(data: string) {
  const json = data.replace(/\n/g, '').replace(/\?/g, '').replace(/=/g, ':').replace(/\|/g, '').replace(/undefined/g, '').replace(/;(?=})/g, '').replace(/,(?=})/g, '').replace(/' '/g, '').replace(/;/g, ',').replace('export default', '').replace(/(\r\n|\n|\r)/gm, '').replace(/ /g, '').replace(/"/g, '').replace(/'/g, '')
    .replace(/{/g, '{"').replace(/}/g, '"}').replace(/:/g, '":"').replace(/,/g, '","')
    .replace(/:"{/g, ':{').replace(/}"}/g, '}}').replace(/}","{/g, '},{').replace(/]"}/g, ']}')
    .replace(/:"\[/g, ':["').replace(/]",/g, '],').replace(/],/g, '"],').replace(/]}/g, '"]}')
    .replace(/\(/g, '("').replace(/\)/g, '")').replace(/"{/g, '{').replace(/}"/g, '}');
  const obj = JSON.parse(json);
  Object.keys(obj).forEach(k => {
    const int = parseInt(obj[k]);
    if (!isNaN(int) && typeof (obj[k]) !== 'object') {
      obj[k] = int;
    }
  });
  return obj;
}
