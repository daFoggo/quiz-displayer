import { PageLoader } from "@/components/common/page-loader";
import QuizApp from "@/features/quiz/components/quiz";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<PageLoader variant="bars" />}>
      <QuizApp />
    </Suspense>
  );
};

export default Page;
