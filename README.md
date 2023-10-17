# Dog Image Viewer - Deliveristo Challenge

Welcome in the my Dog Image Viewer app repository. This app is a challenge for Deliveristo.

## How to run the app

Follow these simple steps to run the app on your computer:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/ndrSaba/Challenge.git

2. **Install the dependencies**:

    ```bash
    cd Challenge
    yarn
    ```

3. **Run the app**:

    ```bash
    yarn start
    ```

## How to use the app

The app is very simple to use. If you click on the button "Select a Breed" you will see a list of Breeds. If you click on one of them, you will see a random image of a dog of that breed. 
If there is one of more sub-breeds, you will see a list of them under the random image. If you click on one of them, you will see a random image of a dog of that sub-breed.

## How the app works

The app is on a single page and it is composed by three components: `Content`, `Dropdown`, `ImageBox`, `ProgressBar` and `SubBreeds`. The `Content` component is the main component and it contains the other components. The `DropDown` component is a button that, when clicked, shows a list of breeds. The `ImageBox` component is a component that shows a random image of a dog of a specific breed. 

There are 3 Custom Hooks in the `Content` component: `LoadBreeds`, `LoadSubBreeds` and `GenerateDogs`.

### LoadBreeds

The `LoadBreeds` Custom Hook is used to load the breeds. It is called when the app is loaded and when the user clicks on the button "Select a Breed". It returns an array of breeds.

### LoadSubBreeds

The `LoadSubBreeds` Custom Hook is used to load the sub-breeds. It is called when the user clicks on a breed. If the breed has one or more sub-breeds, it returns an array of sub-breeds.

### GenerateDogs

The `GenerateDogs` Custom Hook is used to generate the random images of the dogs. It is called when the user clicks on a breed or on a sub-breed. It returns an array of random images of dogs, the loading state and the error state.

## How the app is tested

The app is tested with Jest and React Testing Library. There are 3 test files: `Content.test.js`, `Dropdown.test.js`,  `ImageBox.test.js`, `ProgressBar.test.js` and `SubBreeds.test.js` . 

### How to run the tests

To run the test you have to run the command `yarn test` in the terminal.


## List of technologies used

- [React](https://reactjs.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Dog API](https://dog.ceo/dog-api/)

## Author

- **Andrea Sabato** - [ndrSaba](https://github.com/ndrSaba)
