import React from "react";

class WikiData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null
    };
  }

  fetchData = async () => {
    /*string together the url */

    //List_of_chemical_elements
    const URL = "https://en.wikipedia.org/w/api.php";
    const TITLE = "List_of_chemical_elements";
    //List

    const PARAMS = {
      action: "parse",
      page: TITLE,
      prop: "wikitext",
      section: 1,
      format: "json"
    };

    const param = `?action=parse&page=${TITLE}&prop=wikitext&section=1&format=json&mode=no-cors
      prop: "wikitext",
      section: 1,
      format: "json"
`;

    const example = `https://en.wikipedia.org/w/api.php?action=parse&page=Wikipedia:Unusual_articles/Places_and_infrastructure&prop=wikitext&section=5&format=json`;
    const current = `https://en.wikipedia.org/w/api.php?action=parse&page=List_of_chemical_elements&prop=wikitext&section=1&format=json`;

    const searchURL = `${URL}${param}`;
    console.log(searchURL);
    const data = await fetch(searchURL);
    console.log(data);
    const body = await data.body;
    console.log(body);

    //return body;
  };

  componentDidMount = () => {
    this.fetchData().then(arr => {
      this.setState({ response: arr }, () => console.log(this.state.response));
    });
  };

  render() {
    return <div>data goes here?</div>;
  }
}

export default WikiData;
