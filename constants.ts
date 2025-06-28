
import { IncorrectAnswer } from './types';

export const INCORRECT_ANSWER_NOTES: IncorrectAnswer[] = [
  {
    id: 1,
    category: "부사 vs. 형용사 구분",
    problem: "To ensure accuracy, please enter all the data as ____ as possible.",
    myAnswer: "careful",
    correctAnswer: "carefully",
    explanation: "이 문장에서 빈칸은 '데이터를 입력하다'라는 동사구(enter the data)를 수식하고 있습니다. 동사를 꾸며주는 역할은 부사가 하므로, 형용사인 careful(신중한)이 아니라 부사인 carefully(신중하게)를 사용해야 합니다.",
    keyPoint: "동사를 수식하는 것은 부사!"
  },
  {
    id: 2,
    category: "명사 자리 찾기 (주어 역할)",
    problem: "____ in to the internship program will depend on academic performance and relevant work experience.",
    myAnswer: "(B) Accepting",
    correctAnswer: "(C) Acceptance",
    explanation: "문장에서 will depend라는 동사의 주어가 필요한 자리입니다. 주어 역할은 명사가 할 수 있으므로, '수락, 허가'라는 뜻의 명사 Acceptance가 정답입니다. Accepting은 동명사로 주어 자리에 올 수 있지만, '인턴십 프로그램으로의 수락'이라는 특정 행위나 사실을 나타낼 때는 일반 명사인 Acceptance가 더 자연스럽습니다.",
    keyPoint: "문장의 주어 자리에는 명사가 온다."
  },
  {
    id: 3,
    category: "부사 vs. 형용사 구분 (형용사 수식)",
    problem: "The Haynesville Natural History Museum is pleased with the ____ large number of people visiting the butterfly exhibition.",
    myAnswer: "(C) surprised",
    correctAnswer: "(D) surprisingly",
    explanation: "빈칸은 뒤따르는 형용사 large(많은)를 꾸며주는 자리입니다. 형용사를 수식하는 것은 부사이므로, surprisingly(놀랍게도)가 와서 '놀랍도록 많은 수'라는 의미를 완성합니다. surprised는 감정을 느끼는 주체를 설명하는 형용사(p.p.)이므로 여기서는 어색합니다.",
    keyPoint: "형용사를 수식하는 것은 부사!"
  },
  {
    id: 4,
    category: "부사 vs. 동사 구분 (동사 수식)",
    problem: "Film director Robert Duke ____ shot several scenes of the movie Outcast in the dark to create suspense.",
    myAnswer: "(A) intend",
    correctAnswer: "(B) intentionally",
    explanation: "이 문장의 주 동사는 shot(촬영했다)입니다. 빈칸은 이 동사를 어떻게 촬영했는지 꾸며주는 부사 자리입니다. 따라서 '의도적으로'라는 뜻의 부사 intentionally가 정답입니다. intend는 '의도하다'라는 동사 원형입니다.",
    keyPoint: "동사의 행위 방식을 설명하는 것은 부사!"
  },
  {
    id: 5,
    category: "to부정사 용법",
    problem: "To make a warranty claim, be sure ____ the defective product's serial number and the sales receipt.",
    myAnswer: "(B) submit",
    correctAnswer: "(C) to submit",
    explanation: "be sure to + 동사원형은 '~하는 것을 확실히 하다', '~하는 것을 잊지 말고 하다'라는 의미로 자주 쓰이는 표현입니다. 따라서 동사원형 submit이 아닌 to부정사 형태인 to submit이 와야 합니다.",
    keyPoint: "핵심 숙어: be sure to R (~하는 것을 확실히 하다)"
  },
  {
    id: 6,
    category: "명령문 동사 원형",
    problem: "To finish setting up the tablet, ____ your preferred language and time zone.",
    myAnswer: "(A) choice",
    correctAnswer: "(D) choose",
    explanation: "쉼표(,) 앞부분은 목적을 나타내는 to부정사구이고, 뒷부분이 주절입니다. 주절에 주어가 없이 빈칸으로 시작하므로, '~해라'는 의미의 명령문임을 알 수 있습니다. 명령문은 항상 동사 원형으로 시작해야 하므로, '선택하다'라는 의미의 동사 choose가 정답입니다. choice는 명사입니다.",
    keyPoint: "주어 없는 문장은 동사 원형으로 시작하는 명령문일 가능성이 높다."
  }
];
