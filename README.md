# Address Book

Nuvalence Interview Assessment built by Jaeho Sim

## Instruction

1. Clone the repository: `https://github.com/jaeho-sim/address-book.git`
2. Run `npm install` to install the packages
3. Run `npm start` to run the app
4. Open `http://localhost:3000` to view in the browser
5. Run `npm test` to run test, and `npm run coverage` to see the test coverage

## Summary

This simple app displays a list of random persons, and lets you to see the person's details when selected.\
There are two different pages to navigate:
1. **List** page (path: "/") - lists all the random persons fetched from the API endpoint
2. **Detail** page (path: "/{username}) - shows selected person's detail

### Implementation

The React App was built by using **Hooks** for functional components.

Redux is used to store and share states between components. The API call is being made in both Redux Thunk (for List page) and inside the Detail page component to simply show the two different ways of calling.

The API endpoint used `https://randomuser.me/api/?results=20&seed=fa68f06333af18b7` has the seed parameter so that it always provide the same set of persons. This allows each individual's detail page to be accessible not only from the List page, but also by typing it directly in the browser address bar. When opened, the `username` parameter in the url is used to find the corresponding person from the API data.

SCSS is used for UI implementation.


### Given More Time...

Given more time, first of all, I would like to connect the app to a permanent storage (i.e. local storage or cloud service) to persist contacts. After then, I would like to build a form that allows to add custom contacts, to make the app really function as an address book. Working on this would take about less than one working day, depending on how complex it is to set up the storage at the beginning.

Further more, there are several features can be implemented in the list page: filtering, sorting, and pagination. All these implementation can be done by using Redux, thus they will only take a few hours to build them all.

To make the app more robust, I would've added more error handlers that could catch any type of error.


---
If you have any question, please send email to jaeho.asdf@mgail.com