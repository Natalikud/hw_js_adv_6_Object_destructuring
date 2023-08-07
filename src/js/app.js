export default function specialAttack(obj) {
  const { special } = obj;
  const resultList = [];
  special.forEach((element) => {
    const {
      id, name, icon, description,
    } = element;
    if (description === undefined) {
      resultList.push({
        id, name, icon, description: 'Описание недоступно',
      });
    } else {
      resultList.push({
        id, name, icon, description,
      });
    }
  });
  return resultList;
}
