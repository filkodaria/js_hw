// Task 3.

/*
1. На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей. 
  Вывести на экран: имя, e-mail, телефон и название компании пользователя.
  Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах. 
  Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий. 
  Для реализации трех запросов воспользоваться Promise.all().
  (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId). 
      Пример: 
      1.  name: Leanne Graham
          email: Sincere@april.biz
          phone: 1-770-736-8031 x56442
          company: Romaguera-Crona    
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)
      __________________________________

      2.  name: Ervin Howell   
          email: Shanna@melissa.tv 
          phone: 010-692-6593 x09125
          company: Deckow-Crist
          albums:
            Album name 1 (10 photos)
            Album name 2 (100 photos)
*/

const url = 'https://jsonplaceholder.typicode.com'

async function getUsersData(endpoint) {
	try {
		const response = await fetch(url + '/' + endpoint);

		if (!response.ok) {
			throw new Error(`Response status code: ${response.status}`);
		} 
		const data = await response.json();
    return data;

	} catch (error) {
		console.log(error);
	}
}

async function displayUsersData() {
  try {
    const [usersInfo, albumsInfo, photosInfo] = await Promise.all( [getUsersData('users'), getUsersData('albums'), getUsersData('photos')] );
    
    usersInfo.forEach(user => {
      console.log(`User_${user.id}:`);
  
      for (key in user) {
        if (key === 'name' || key === 'email' || key === 'phone') {
          console.log(`  ${key}: ${user[key]}`);
        }
        if (key === 'company') {
          console.log(`  ${key}: ${user[key].name}`);
        }
      }
      const userAlbums = albumsInfo.filter(album => album.userId === user.id);
      console.log(`  albums:`);
      userAlbums.forEach(userAlbum => {
        const countPhotos = photosInfo.filter(photos => userAlbum.id === photos.albumId).length;
        console.log(`    title: ${userAlbum.title} (${countPhotos} photos)`);
      })
    }); 
  } catch (error) {
		console.log(error);
  }
}

displayUsersData()


/*
2. Создайте конвертер валют, используя Exchange Rates API. (зарегистрироваться и получить токен) Данные с сайта брать запросом используя fetch(). 
  Пользователь должен иметь возможность передавать валюту и сумму денег в функцию и получать сумму денег в желаемой валюте на выходе. 
  Например: currencyConvertor(USD, 40, EUR) ⇒ 35 EUR
  Решить с помощью в 2 вариантах: с  .then() и с использованием async/await
*/