import type { Meta, StoryObj } from "@storybook/react";

import Divider from "../src/divider";

const meta = {
  title: "UI/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "콘텐츠 섹션을 시각적으로 구분할 때 사용합니다. 레이아웃의 구조를 명확히 하며, 사용자의 정보 탐색을 돕습니다.",
  },
  argTypes: {
    orientation: {
      description:
        "Divider의 방향을 설정합니다.<br/>default(horizontal)일 때는 hr 태그를, vertical일 때는 div 태그를 사용합니다.",
      control: {
        type: "select",
      },
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    style: {
      width: "1px",
      height: "100px",
      backgroundColor: "black",
    },
  },
};
