const React = require('react');
const Layout = require('./Layout');

module.exports = function MainPage({ user, books }) {
  console.log(user);
  return (
    <Layout user={user}>
      <div className='contflex'>
        {books && (
          <ul className='book-list'>
            {books.map((book) => (
              <li className='book-item' key={book.id}>
                <div className='container-entries'>
                  <img className='img-entries' src={book.img} />
                  <div className='container__text'>
                    <h1 className='text-title'>{book.title.toUpperCase()}</h1>
                    <div className='star-rating'>
                      <div className='star-rating_items'>
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          xmlns='http://www.w3.org/2000/svg'
                          class='star-rating-edit__item star-rating__item--active star-rating__item--half-active'
                        >
                          <defs>
                            <linearGradient id='half'>
                              <stop offset='50%' stop-color='#FBB500'></stop>{' '}
                              <stop offset='50%' stop-color='#D3DADF'></stop>
                            </linearGradient>
                          </defs>{' '}
                          <path
                            fill='#D3DADF'
                            d='M8.25927 12.5336C8.09993 12.4369 7.90007 12.4369 7.74073 12.5336L4.6486 14.4088C4.27616 14.6347 3.81307 14.3094 3.8992 13.8824L4.65526 10.1344C4.68932 9.96555 4.63407 9.79106 4.50904 9.67258L1.78206 7.08858C1.47314 6.79586 1.64785 6.27563 2.07082 6.22869L5.67573 5.82863C5.85542 5.80869 6.01035 5.69329 6.08092 5.52684L7.53966 2.08588C7.71197 1.67942 8.28803 1.67942 8.46034 2.08588L9.91908 5.52684C9.98965 5.69329 10.1446 5.80869 10.3243 5.82863L13.9292 6.22869C14.3522 6.27563 14.5269 6.79586 14.2179 7.08858L11.491 9.67258C11.3659 9.79106 11.3107 9.96555 11.3447 10.1344L12.1008 13.8824C12.1869 14.3094 11.7238 14.6347 11.3514 14.4088L8.25927 12.5336Z'
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <p className='text-info'>{book.description}</p>

                    <div className='container__text__timing'>
                      <div className='container__text__timing_time'>
                        <h2 className='time-title'>AUTHOR:</h2>
                        <p className='time'>{book.author}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};
