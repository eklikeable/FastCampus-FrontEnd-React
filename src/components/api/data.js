const getParameters = {
  serviceKey:
    'l%2FH4v4CwsXVCgybZaJgk4LyH2lnZxMWxO027Nd76GX%2FhZqoWV3PNu0j3ZCYAaVjRgGWU%2For%2BCKwpTib2Z5UGLg%3D%3D',
  returnType: 'json',
  numOfRows: '100',
  pageNo: '1',
  ver: '1.0',
};

export async function getData(sido) {
  let wholeData;
  try {
    await fetch(
      `B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${getParameters['serviceKey']}&returnType=${getParameters['returnType']}&numOfRows=${getParameters['numOfRows']}&pageNo=${getParameters['pageNo']}&sidoName=${sido}&ver=${getParameters['ver']}`
    )
      .then((response) => response.json())
      .then((res) => {
        wholeData = res['response']['body']['items'];
        // console.log(totalData);
      });
  } catch (e) {
    throw new Error('데이터를 불러오는데 실패했습니다.');
  }
  return wholeData;
}
