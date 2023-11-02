import { fireEvent, getByTestId, render } from "@testing-library/react";
import RadioButton from "./RadioButton";
import { useRadioGroup, VStack } from "@chakra-ui/react";
import { useState } from "react";

test("Radio renders", () => {
  const { container } = render(<RadioButton value={"option1"} />);

  expect(container).toBeInTheDocument();

  const radioButton = getByTestId(container, "option1");

  expect(radioButton).toBeVisible();

  expect(radioButton).toMatchSnapshot();
});

test("Change Selection Updates the value", () => {
  const Container = () => {
    const [selectedOption, setSelectedOption] = useState<string>("option 1");

    const handleChange = (value: string) => {
      setSelectedOption(value);
    };

    const options = ["option 1", "option 2"];
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: "radio",
      defaultValue: selectedOption,
      onChange: handleChange,
    });

    const group = getRootProps();

    const radioButtons = (
      <div>
        <VStack {...group} alignItems="stretch">
          {options.map((item) => (
            <RadioButton key={item} {...getRadioProps({ value: item })}>
              {item.toLowerCase()}
            </RadioButton>
          ))}
        </VStack>

        <div data-testid="SelectedOption">{selectedOption}</div>
      </div>
    );

    return radioButtons;
  };
  const { container } = render(<Container />);

  let selectedValue = getByTestId(container, "SelectedOption");
  expect(selectedValue).toHaveTextContent("option 1");

  const uncheckedRadio = getByTestId(container, "option2");
  fireEvent(uncheckedRadio, new MouseEvent("click"));

  selectedValue = getByTestId(container, "SelectedOption");
  expect(selectedValue).toHaveTextContent("option 2");
});
