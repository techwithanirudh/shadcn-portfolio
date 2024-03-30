import React from "react";
import { CardContent, Card } from "@/components/ui/card";
import { CodeIcon, DatabaseIcon, LayoutIcon, SmartphoneIcon } from "@/icons";
import MotionWrap from "@/components/MotionWrap";

function Skills() {
  return (
    <MotionWrap className="w-full py-12 md:py-24 lg:py-32 border-t" id="skills">
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
              My Skills
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Here are some of my skills.
            </p>
          </div>
          <div className="grid gap-4">
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-4">
                  <CodeIcon className="h-8 w-8" />
                  <div className="grid gap-0.5">
                    <h3 className="text-xl font-semibold">Web Development</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Building beautiful and functional websites.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-4">
                  <LayoutIcon className="h-8 w-8" />
                  <div className="grid gap-0.5">
                    <h3 className="text-xl font-semibold">UI/UX Design</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Creating delightful user experiences.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-4">
                  <DatabaseIcon className="h-8 w-8" />
                  <div className="grid gap-0.5">
                    <h3 className="text-xl font-semibold">
                      Database Management
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Storing and organizing data efficiently.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-4">
                  <SmartphoneIcon className="h-8 w-8" />
                  <div className="grid gap-0.5">
                    <h3 className="text-xl font-semibold">
                      Mobile Development
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Crafting apps for smartphones and tablets.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Skills;
