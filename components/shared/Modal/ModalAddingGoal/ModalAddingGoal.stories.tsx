// plop-templates/story.tsx.hbs
import type { Meta, StoryObj } from "@storybook/react";
import ModalAddingGoal from "./ModalAddingGoal"; // 실제 컴포넌트 파일 임포트

const meta = {
  title: "Shared/Modals/ModalAddingGoal", // Storybook 사이드바 경로 (프로젝트 규칙에 맞게 수정)
  component: ModalAddingGoal,
  parameters: {
    // Canvas 레이아웃을 중앙으로 정렬하거나 패딩을 추가할 수 있습니다.
    layout: "centered",
    docs: {
      description: {
        component: "비동기 처리는 외부에 일임",
      },
    },
  },
  // Docs 탭 자동 생성을 위해 필요합니다.
  tags: ["autodocs"],
  // Controls Addon에서 Props를 어떻게 제어할지, 설명을 추가합니다.
  // 모든 스토리에 적용될 기본 Props (선택 사항)
  args: {
    // 예시: label: 'ModalAddingGoal',
  },
  // 모달 docs용 렌더 옵션 -- 이렇게 안하면 docs에선 쪼그라져 보임. w-full 때매.
  render: (args) => {
    return (
      <>
        <div style={{ minWidth: "320px", height: "300px" }}>
          <ModalAddingGoal {...args} />
        </div>
      </>
    );
  },
} satisfies Meta<typeof ModalAddingGoal>;

export default meta;

type Story = StoryObj<typeof meta>;

// 가장 기본적인 Primary 스토리
// argTypes를 Primary는 기본으로 가집니다.
export const Primary: Story = {
  argTypes: {
    // 예시: backgroundColor: { control: 'color', description: '컴포넌트 배경색' },
  },
  args: {
    onAddGoal: async () => {
      console.log("스토리북 -- 비동기 처리");
    },
    onClose: () => {
      console.log("스토리북 -- close");
    },
    // Primary 스토리에만 적용될 Props
  },
};

/*
// UI variatns들을 스토리로 생성합니다.
// 추가적인 스토리 예시:
export const Secondary: Story = {
  args: {
    label: 'Secondary ModalAddingGoal',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large ModalAddingGoal',
  },
};
*/
