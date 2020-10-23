const MAIN_URL = "https://rickandmortyapi.com/api/character/";

const buttonTypes = Object.freeze({
  prev: "prev",
  next: "next",
});

class CharacterList {
  constructor() {
    this.page = 1;
    this.data = {};

    this.list = document.createElement("ul");

    this.prevButton = document.createElement("button");
    this.prevButton.innerText = "PREV";
    this.prevButton.dataset.type = buttonTypes.prev;

    this.nextButton = document.createElement("button");
    this.nextButton.innerText = "NEXT";
    this.nextButton.dataset.type = buttonTypes.next;

    this.pageLabel = document.createElement("span");
  }

  loadCharacters() {
    const searchParams = new URLSearchParams();
    searchParams.set("page", this.page);

    return fetch(`${MAIN_URL}?${searchParams}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return response.json().then((error) => {
          const e = new Error("Something went wrong");
          e.data = error;
          throw e;
        });
      })

      .then((data) => {
        this.data = {
          hasNextPage: data.info.next !== null,
          hasPrevPage: data.info.prev !== null,
          results: data.results,
        };
        this.onDataLoad();
      })
      .catch((error) => console.error(error));
  }

  onDataLoad() {
    this.list.innerHTML = "";

    for (const user of this.data.results) {
      const listItem = document.createElement("li");
      listItem.innerText = user.name;
      this.list.appendChild(listItem);
    }

    this.pageLabel.innerText = this.page;

    this.prevButton.disabled = !this.data.hasPrevPage;
    this.nextButton.disabled = !this.data.hasNextPage;
  }

  onButtonClick(event) {
    console.log(event, this);
    switch (event.target.dataset.type) {
      case buttonTypes.next: {
        this.page++;
        this.loadCharacters();
        break;
      }
      case buttonTypes.prev: {
        this.page--;
        this.loadCharacters();
        break;
      }
      default:
        break;
    }
  }

  render() {
    [this.nextButton, this.prevButton].forEach((button) =>
      button.addEventListener("click", this.onButtonClick.bind(this))
    );

    const wparrepPage = document.createElement("div");
    wparrepPage.appendChild(this.prevButton);
    wparrepPage.appendChild(this.pageLabel);
    wparrepPage.appendChild(this.nextButton);

    document.body.appendChild(this.list);
    document.body.appendChild(wparrepPage);

    this.loadCharacters();
  }
}

const list = new CharacterList();
list.render();
