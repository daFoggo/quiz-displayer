"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  BookOpen,
  CheckCircle,
  RotateCcw,
  Trophy,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { DE_1 as quizData } from "../utils/constants";
import type { QuizState } from "../utils/types";

export default function QuizApp() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: {},
    isCompleted: false,
    score: 0,
    showResults: false,
    timeStarted: Date.now(),
  });

  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  // Load saved state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem("security-quiz-state");
    if (savedState) {
      const parsed = JSON.parse(savedState);
      setQuizState(parsed);
      setSelectedAnswer(parsed.answers[parsed.currentQuestion] || "");
    }
  }, []);

  // Save state to localStorage
  useEffect(() => {
    localStorage.setItem("security-quiz-state", JSON.stringify(quizState));
  }, [quizState]);

  const currentQuestionData = quizData[quizState.currentQuestion];
  const progress = ((quizState.currentQuestion + 1) / quizData.length) * 100;

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setQuizState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [prev.currentQuestion]: answer,
      },
    }));
  };

  const handleNext = () => {
    if (quizState.currentQuestion < quizData.length - 1) {
      const nextQuestion = quizState.currentQuestion + 1;
      setQuizState((prev) => ({
        ...prev,
        currentQuestion: nextQuestion,
      }));
      setSelectedAnswer(quizState.answers[nextQuestion] || "");
    } else {
      // Quiz completed
      const score = calculateScore();
      setQuizState((prev) => ({
        ...prev,
        isCompleted: true,
        score,
        showResults: true,
      }));
    }
  };

  const handlePrevious = () => {
    if (quizState.currentQuestion > 0) {
      const prevQuestion = quizState.currentQuestion - 1;
      setQuizState((prev) => ({
        ...prev,
        currentQuestion: prevQuestion,
      }));
      setSelectedAnswer(quizState.answers[prevQuestion] || "");
    }
  };

  const calculateScore = () => {
    let correct = 0;
    quizData.forEach((question, index) => {
      if (quizState.answers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / quizData.length) * 100);
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      answers: {},
      isCompleted: false,
      score: 0,
      showResults: false,
      timeStarted: Date.now(),
    });
    setSelectedAnswer("");
    localStorage.removeItem("security-quiz-state");
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-primary";
    if (score >= 60) return "text-secondary-foreground";
    return "text-destructive";
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <Trophy className="w-8 h-8 text-primary" />;
    if (score >= 60) return <CheckCircle className="w-8 h-8 text-primary" />;
    return <XCircle className="w-8 h-8 text-destructive" />;
  };

  if (quizState.showResults) {
    return (
      <div className="p-4 min-h-screen">
        <div className="mx-auto max-w-4xl">
          <Card className="mb-6">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                {getScoreIcon(quizState.score)}
              </div>
              <CardTitle className="mb-2 text-3xl">Kết quả bài thi</CardTitle>
              <CardDescription>
                Bạn đã hoàn thành bài thi An toàn và Bảo mật Hệ thống Thông tin
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div
                className={`text-6xl font-bold mb-4 ${getScoreColor(
                  quizState.score
                )}`}
              >
                {quizState.score}%
              </div>
              <div className="mb-6 text-muted-foreground text-lg">
                Số câu đúng:{" "}
                {
                  Object.entries(quizState.answers).filter(
                    ([index, answer]) =>
                      answer === quizData[Number.parseInt(index)].correctAnswer
                  ).length
                }
                /{quizData.length}
              </div>
              <div className="flex justify-center gap-4">
                <Button onClick={resetQuiz} size="lg">
                  <RotateCcw className="mr-2 w-4 h-4" />
                  Làm lại bài thi
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    setQuizState((prev) => ({ ...prev, showResults: false }))
                  }
                >
                  <BookOpen className="mr-2 w-4 h-4" />
                  Xem lại đáp án
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Results */}
          <div className="space-y-4">
            {quizData.map((question, index) => {
              const userAnswer = quizState.answers[index];
              const isCorrect = userAnswer === question.correctAnswer;

              return (
                <Card
                  key={question.id}
                  className={`border-l-4 ${
                    isCorrect ? "border-l-primary" : "border-l-destructive"
                  }`}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">
                        Câu {question.id}: {question.question}
                      </CardTitle>
                      {isCorrect ? (
                        <CheckCircle className="flex-shrink-0 w-6 h-6 text-primary" />
                      ) : (
                        <XCircle className="flex-shrink-0 w-6 h-6 text-destructive" />
                      )}
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {question.chapter}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {question.options.map((option, optionIndex) => {
                        const optionLetter = String.fromCharCode(
                          65 + optionIndex
                        );
                        const isUserAnswer = userAnswer === optionLetter;
                        const isCorrectAnswer =
                          question.correctAnswer === optionLetter;

                        return (
                          <div
                            key={optionIndex}
                            className={`p-3 rounded-lg border ${
                              isCorrectAnswer
                                ? "bg-primary/10 border-primary/20 text-primary"
                                : isUserAnswer
                                ? "bg-destructive/10 border-destructive/20 text-destructive"
                                : "bg-muted border-border"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">
                                {optionLetter}.
                              </span>
                              <span>{option}</span>
                              {isCorrectAnswer && (
                                <CheckCircle className="ml-auto w-4 h-4 text-primary" />
                              )}
                              {isUserAnswer && !isCorrectAnswer && (
                                <XCircle className="ml-auto w-4 h-4 text-destructive" />
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Bài thi trắc nghiệm An toàn và Bảo mật Hệ thống Thông tin
            </CardTitle>
            <CardDescription className="text-center">
              Câu {quizState.currentQuestion + 1} / {quizData.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={progress} className="w-full" />
            <div className="flex justify-between mt-2 text-muted-foreground text-sm">
              <span>Tiến độ: {Math.round(progress)}%</span>
              <span>
                Đã trả lời: {Object.keys(quizState.answers).length}/
                {quizData.length}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Question Card */}
        <Card className="mb-6">
          <CardHeader>
            <Badge variant="outline" className="mb-2 w-fit">
              {currentQuestionData.chapter}
            </Badge>
            <CardTitle className="text-xl">
              Câu {currentQuestionData.id}: {currentQuestionData.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={selectedAnswer}
              onValueChange={handleAnswerSelect}
              className="space-y-3"
            >
              {currentQuestionData.options.map((option, index) => {
                const optionLetter = String.fromCharCode(65 + index);
                return (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                      selectedAnswer === optionLetter
                        ? "bg-primary/30 border-primary/40"
                        : "hover:bg-muted border-border"
                    }`}
                    onClick={() => handleAnswerSelect(optionLetter)}
                  >
                    <RadioGroupItem
                      value={optionLetter}
                      id={`option-${index}`}
                    />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex-1 text-base cursor-pointer"
                    >
                      <span className="mr-2 font-semibold">
                        {optionLetter}.
                      </span>
                      {option}
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={quizState.currentQuestion === 0}
              >
                Câu trước
              </Button>

              <div className="flex gap-2">
                <Button variant="outline" onClick={resetQuiz}>
                  <RotateCcw className="mr-2 w-4 h-4" />
                  Làm lại
                </Button>
              </div>

              <Button
                onClick={handleNext}
                disabled={!selectedAnswer}
                className={
                  quizState.currentQuestion === quizData.length - 1
                    ? "bg-primary hover:bg-primary/90"
                    : ""
                }
              >
                {quizState.currentQuestion === quizData.length - 1
                  ? "Hoàn thành"
                  : "Câu tiếp"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
