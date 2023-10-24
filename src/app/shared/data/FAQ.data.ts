import { loremHelper } from "../helpers/lorem.helper";
import { FAQInterface } from "../interfaces/FAQ.interface";

export const FAQData: FAQInterface[] = [

  {
    question: `How does the contact management feature help me keep track of
    clients and partners?`,
    answer: ` Keep track of your contacts, gain valuable insights, analyse
    live data and performance metrics.`,
  },

  {
    question: `Can I customize the dashboards and reporting feature to display
    the metrics that are most important to my business?`,
    answer: loremHelper(20),
  },
  {
    question: `How does the task management feature help me delegate tasks to
    my team and track progress?`,
    answer: loremHelper(20),
  },
  {
    question: `Can I collaborate with my team in real-time using all tools?`,
    answer: loremHelper(20),
  },

  {
    question: `Is the app available on all devices?`,
    answer: loremHelper(20),
  },

  {
    question: `How does the app help me stay compliant when working with
    freelancers and contractors?`,
    answer: loremHelper(20),
  },
  // {
  //   question: ``,
  //   answer: ``,
  // },


]
