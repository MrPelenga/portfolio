'use client'

import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function PortfolioComponent() {
  return (
    <div className="min-h-screen bg-blue-50 dark:bg-blue-900">
      <header className="bg-white dark:bg-blue-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-200">Gabriel Pelenga Mangi</h1>
          <nav className="space-x-4">
            <a href="#about" className="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-100">About</a>
            <a href="#skills" className="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-100">Skills</a>
            <a href="#experience" className="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-100">Experience</a>
            <a href="#projects" className="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-100">Projects</a>
            <a href="#contact" className="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-100">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold">Sports Data Analyst</h2>
            <p className="mt-4 text-xl">Transforming raw data into game-changing insights across multiple sports</p>
            <Button className="mt-8 bg-white text-blue-600 hover:bg-blue-100">Download Resume</Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white dark:bg-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Gabriel Pelenga Mangi"
                width={300}
                height={300}
                className="rounded-full"
              />
              <div>
                <p className="text-lg mb-4">
                  I'm a passionate sports data analyst with expertise in various sports, including basketball, football, boxing, MMA, and American football. 
                  My skills lie in transforming complex datasets into actionable insights that drive strategic decisions in the world of sports.
                </p>
                <p className="text-lg">
                  With a background in computer science and a love for sports analytics, I combine technical skills with domain knowledge 
                  to uncover patterns and trends that can improve team performance, player development, and fan engagement across different sports disciplines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 bg-blue-100 dark:bg-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Python</span>
                        <span>90%</span>
                      </div>
                      <Progress value={90} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>SQL</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>R</span>
                        <span>80%</span>
                      </div>
                      <Progress value={80} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Tableau</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Soft Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Data Visualization</li>
                    <li>Statistical Analysis</li>
                    <li>Machine Learning</li>
                    <li>Project Management</li>
                    <li>Team Collaboration</li>
                    <li>Problem Solving</li>
                    <li>Sports Domain Knowledge</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 bg-white dark:bg-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Data Analyst</CardTitle>
                  <CardDescription>Deloitte | Sep 2022 - Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Analyze complex datasets to provide insights and recommendations to sports clients</li>
                    <li>Develop and maintain dashboards using Tableau for sports data visualization</li>
                    <li>Collaborate with cross-functional teams to deliver high-impact projects in the sports industry</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Data Science Intern</CardTitle>
                  <CardDescription>Accenture | Jun 2021 - Aug 2021</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Assisted in developing machine learning models for predictive analytics in sports</li>
                    <li>Conducted data cleaning and preprocessing on large sports datasets</li>
                    <li>Presented findings to stakeholders using sports data visualization techniques</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-blue-100 dark:bg-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Sports Data Analysis Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>NBA Player Performance Predictor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Developed a machine learning model to predict NBA player performance based on historical data, advanced metrics, and in-game situations. The model achieved 85% accuracy in predicting player efficiency ratings.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Football (Soccer) Tactical Analysis Tool</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Created an interactive visualization tool to analyze team formations, passing networks, and player movements in football matches. This tool has been used by coaches to optimize game strategies and player positioning.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Boxing Match Outcome Predictor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Built a statistical model to predict boxing match outcomes based on fighters' historical performance, physical attributes, and style matchups. The model has shown a 70% accuracy rate in predicting fight results.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>MMA Fighter Career Trajectory Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Conducted a comprehensive analysis of MMA fighters' career trajectories, identifying key factors that contribute to longevity and success in the sport. This research has been used to guide training programs and career planning for athletes.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>NFL Play Calling Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Developed a data-driven model to optimize play calling in American Football, considering factors such as down, distance, field position, and defensive formations. The model has been implemented by a college football team, resulting in a 15% increase in offensive efficiency.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sports Categories Section */}
        <section className="py-16 bg-white dark:bg-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Sports Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {['NFL', 'NBA', 'Football', 'MMA', 'Boxe'].map((sport) => (
                <div key={sport} className="space-y-4">
                  <h3 className="text-xl font-semibold text-center">{sport}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((index) => (
                      <Image
                        key={`${sport}-${index}`}
                        src={`/images/${sport.toLowerCase()}/${sport.toLowerCase()}${index}.jpg`}
                        alt={`${sport} image ${index}`}
                        width={150}
                        height={150}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 bg-blue-100 dark:bg-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <Card>
              <CardHeader>
                <CardTitle>Bachelor of Science in Computer Science</CardTitle>
                <CardDescription>University of Kinshasa | 2018 - 2022</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Relevant coursework: Data Structures, Algorithms, Database Systems, Machine Learning, Statistics, Sports Analytics</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white dark:bg-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8 text-blue-600 dark:text-blue-200">Get in Touch</h2>
            <p className="text-xl mb-8 text-blue-800 dark:text-blue-100">Interested in collaborating on sports analytics projects? Let's connect!</p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon" className="text-blue-600 border-blue-600 hover:bg-blue-100 dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-700">
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="text-blue-600 border-blue-600 hover:bg-blue-100 dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-700">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="text-blue-600 border-blue-600 hover:bg-blue-100 dark:text-blue-300 dark:border-blue-300 dark:hover:bg-blue-700">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Test d'affichage d'une seule image */}
        <section className="py-16 bg-white dark:bg-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Test Image</h2>
            <div>
              <Image
                src="/images/nfl1.jpg"
                alt="Test NFL image"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <p className="mt-2">Chemin de l'image : /images/nfl1.jpg</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2023 Gabriel Pelenga Mangi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}