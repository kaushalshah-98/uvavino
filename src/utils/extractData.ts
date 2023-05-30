import { getData } from './getData';

export const extractData = <T>(row: T, property: keyof T | keyof T[] | '', separator?: string) => {
  const dataArr: string[] = [];
  let data: string | undefined = '';

  if (Array.isArray(property)) {
    if (separator === '\n') {
      for (const key of property) {
        data = getData(row, key) as string;
        dataArr.push(data);
      }
    } else {
      for (const key of property) {
        data = data.concat((getData(row, key) as string) + (separator ?? ''));
      }
      dataArr.push(data);
    }
  } else {
    data = getData(row, property as string) as string;
    dataArr.push(data);
  }

  return { data: dataArr };
};
