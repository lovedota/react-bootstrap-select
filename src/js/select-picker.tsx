import "bootstrap-select/js";
import "bootstrap-select/css";

import * as React from "react";
import * as ReactDOM from "react-dom";

interface Props {
    onChange: (value: any[] | any) => void;
    defaultValue?: any[] | any;
    children?: any;
    className?: string;
    title: string;
    disabled?: boolean;
    multiple: boolean;
}

class SelectPicker extends React.Component<Props, any> {
    private element: JQuery;

    public componentDidMount() {
        this.element = $(ReactDOM.findDOMNode(this)).selectpicker();

        this.element.selectpicker("val", this.props.defaultValue || []);

        this.element.on("changed.bs.select", () => {
            this.props.onChange(this.element.selectpicker("val"));
        });
    }

    public componentWillUnmount() {
        this.element.off("changed.bs.select");
        this.element.selectpicker("destroy");
    }

    public componentDidUpdate() {
        this.element.selectpicker("refresh");
    }

    public setValue(newValue) {
        this.element.selectpicker("val", newValue);
        this.element.selectpicker("refresh");
    }

    public hide() {
        this.element.parent("div.bootstrap-select").removeClass("open");
    }

    public render() {
        let newProps = {};

        for (let prop in this.props) {
            if (prop !== "onChange") {
                // onChange will conflict with "changed.bs.select" event
                newProps[prop] = this.props[prop];
            }
        }

        return (
            <select {...newProps}>
                {this.props.children}
            </select>

        );
    }
}

export default SelectPicker;
