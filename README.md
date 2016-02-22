React-Select
============

A Select control built for [React](http://facebook.github.io/react/index.html) from [Bootstrap Select](https://silviomoreto.github.io/bootstrap-select/).


#Description

- This project is for learning Typescript with React
- This project uses new *Flux Utils ReduceStore* pattern https://facebook.github.io/flux/docs/flux-utils.html
- This project uses *tslint* for checking coding styles http://palantir.github.io/tslint/
- It uses *gulp-typescript* to extract *ts, tsx* files to *js*
- Then uses *gulp-webpack* to bundle it into one file

#Demo

### Single Select

``` js
import SelectPicker from "react-select-picker";

<SelectPicker
    className="form-control"
    title="Select Cities"
    disabled={this.props.isDisabled}
    defaultValue={this.props.selectedCityIds}
    onChange={this.onChange.bind(this)}
>
    {options}
</SelectPicker>
```

### Multiple Select

``` js
import SelectPicker from "react-select-picker";

<SelectPicker
    className="form-control"
    title="Select Cities"
    multiple
    disabled={this.props.isDisabled}
    defaultValue={this.props.selectedCityIds}
    onChange={this.onChange.bind(this)}
>
    {options}
</SelectPicker>
```

### Demo repository

- https://github.com/lovedota/react-typescript-gulp-webpack

# Run

```
npm install
npm install -g gulp
npm install -g tsd

tds reinstall -so
gulp serve
```

# Tips

https://gist.github.com/coolaj86/1318304
