export default function specialAttack(obj) {
  const { special } = obj;
  const resultList = [];
  special.forEach((element) => {
    if (element.description === undefined) {
      element.description = 'Описание недоступно';
      resultList.push(element);
    } else {
      resultList.push(element);
    }
  });
  return resultList;
}
