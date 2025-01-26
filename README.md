### Hexlet tests and linter status:
[![Actions Status](https://github.com/orc-code/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/orc-code/frontend-project-44/actions)

### Code Climate status:
[![Maintainability](https://api.codeclimate.com/v1/badges/4fb116ae924b77d594c9/maintainability)](https://codeclimate.com/github/orc-code/frontend-project-44/maintainability)

#### Установка

1. Клонируем [репозиторий](https://github.com/orc-code/frontend-project-44.git)
```properties
git clone https://github.com/orc-code/frontend-project-44.git
```
2. Переходим в директорию проекта
```properties
cd frontend-project-44/
```
3. Устанавливаем зависимости
```properties
make install
```
4. Устанавливаем пакет игр
```properties
make addGames
```

#### Примеры игр

##### brain-even

* запуск
```properties
brain-even
```
```
brain-even
Welcome to the Brain Games!
May I have your name? orc
Hello, orc!
Answer "yes" if the number is even, otherwise answer "no".
Question: 69
Your answer: no
Correct!
Question: 86
Your answer: yes
Correct!
Question: 43
Your answer: no
Correct!
Congratulations, orc!
```
```
brain-even
Welcome to the Brain Games!
May I have your name? orc
Hello, orc!
Answer "yes" if the number is even, otherwise answer "no".
Question: 51
Your answer: yes
'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, orc!
```

##### brain-calc

* запуск
```properties
brain-calc
```
```
brain-calc
Welcome to the Brain Games!
May I have your name? orc
Hello, orc!
What is the result of the expression?
Question: 27 * 64
Your answer: 1728
Correct!
Question: 80 + 67
Your answer: 147
Correct!
Question: 73 - 83
Your answer: -10
Correct!
Congratulations, orc!
```
```
brain-calc
Welcome to the Brain Games!
May I have your name? orc
Hello, orc!
What is the result of the expression?
Question: 24 * 1
Your answer: 1
'1' is wrong answer ;(. Correct answer was '24'.
Let's try again, orc!
```

##### brain-gcd

* запуск
```properties
brain-gcd
```
```
brain-gcd
Welcome to the Brain Games!
May I have your name? orc
Hello, orc!
Find the greatest common divisor of given numbers.
Question: 92 79
Your answer: 1
Correct!
Question: 72 62
Your answer: 2
Correct!
Question: 62 96
Your answer: 2
Correct!
Congratulations, orc!
```
```
brain-gcd
Welcome to the Brain Games!
May I have your name? orc
Hello, orc!
Find the greatest common divisor of given numbers.
Question: 27 35
Your answer: 2
'2' is wrong answer ;(. Correct answer was '1'.
Let's try again, orc!
```

##### brain-progression

* запуск
```properties
brain-progression
```
```
brain-progression
Welcome to the Brain Games!
May I have your name? orc
Hello, orc!
What number is missing in the progression?
Question: .. 87 164 241 318 395 472 549 626 703
Your answer: 10
Correct!
Question: 11 .. 69 98 127 156 185 214 243 272
Your answer: 40
Correct!
Question: 10 15 20 25 30 35 40 45 50 ..
Your answer: 55
Correct!
Congratulations, orc!
```
```
brain-progression
Welcome to the Brain Games!
May I have your name? orc
Hello, orc!
What number is missing in the progression?
Question: 30 70 .. 150 190 230 270 310 350 390
Your answer: 1
'1' is wrong answer ;(. Correct answer was '110'.
Let's try again, orc!
```

##### brain-prime

* запуск
```properties
brain-prime
```
```
brain-prime
Welcome to the Brain Games!
May I have your name? orc
Hello, orc!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 63
Your answer: no
Correct!
Question: 44
Your answer: no
Correct!
Question: 84
Your answer: no
Correct!
Congratulations, orc!
```
```
brain-prime
Welcome to the Brain Games!
May I have your name? orc
Hello, orc!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 29
Your answer: no
'no' is wrong answer ;(. Correct answer was 'yes'.
Let's try again, orc!
```
