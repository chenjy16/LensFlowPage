import { ArrowRight, Download, Star, CheckCircle, Camera, Monitor, Mic, Shield, Users, Zap, Volume2, User, Settings, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Monitor className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900 dark:text-white">LensFlowPro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Features</a>
              <a href="#advantages" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Advantages</a>
              <a href="#requirements" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Requirements</a>
              <a href="#support" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Professional Mac
            <span className="text-blue-600 dark:text-blue-400"> Screen Recording</span>
            <br />
            for Creators
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            LensFlowPro is built for creators, educators, indie developers, and teams who record frequently every day. 
            Minimal interface, stable performance, and focused on screen recording and narration without unnecessary complexity.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600 dark:text-slate-300 mb-10">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>One-time purchase, no subscription</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>All processing done locally</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Optimized for creators</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Who is it
              <span className="text-blue-600 dark:text-blue-400"> for?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <Users className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Content Creators</h3>
                <p className="text-slate-600 dark:text-slate-300">YouTube / Bilibili / Xiaohongshu creators who need high-quality screen recording</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Monitor className="h-8 w-8 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Educators</h3>
                <p className="text-slate-600 dark:text-slate-300">Teachers, organizations, and instructors recording online courses and training videos</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Zap className="h-8 w-8 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Developers</h3>
                <p className="text-slate-600 dark:text-slate-300">Indie developers and teams who need to demo products or create app preview videos</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Settings className="h-8 w-8 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Teams</h3>
                <p className="text-slate-600 dark:text-slate-300">Companies and internal teams who need to record how-to tutorials and onboarding training videos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages Section */}
      <section id="advantages" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Key
              <span className="text-blue-600 dark:text-blue-400"> Advantages</span>
            </h2>
          </div>
          
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">1. Flexible recording for different scenarios</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl">
                  <Monitor className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Entire Desktop</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Record the full desktop or specific display</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl">
                  <Camera className="h-8 w-8 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">App-Specific</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Record only a particular app window</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl">
                  <Settings className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Precise Control</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Control exactly what gets recorded</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">2. Clear visuals and high-quality audio</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl">
                  <Volume2 className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">System Audio</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Supports system audio recording (app sounds, video audio, etc.)</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl">
                  <Mic className="h-8 w-8 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Microphone Recording</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">Ideal for speaking while operating, can record both simultaneously</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">3. Presenter Overlay / Picture-in-picture narration</h3>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-xl max-w-2xl mx-auto">
                <User className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <p className="text-slate-600 dark:text-slate-300">
                  On macOS 14, LensFlowPro supports Presenter Overlay so your camera feed appears naturally on screen without blocking key content. 
                  Great for course recording, product demos, and presentation-style videos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality and User Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Quality &amp;
              <span className="text-blue-600 dark:text-blue-400"> User Experience</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Quality and Export</h3>
              <ul className="space-y-4 text-slate-600 dark:text-slate-300">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Supports high-quality video encoding, balancing image quality and file size</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Optimized for modern displays and editing workflows</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Exported files can be imported directly into common video editing software</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Less distraction, more focus on creation</h3>
              <ul className="space-y-4 text-slate-600 dark:text-slate-300">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Clean control interface with key settings at a glance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Flexible control over whether the menu bar and desktop icons appear in the recording</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Supports mouse highlight and zoom effects to better guide viewers' attention</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl text-center">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Optimized for long recording sessions</h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Optimized specifically for long-duration recording to reduce stutters and interruptions. 
              Ideal for recording full courses, multi-chapter trainings, or long product walkthroughs.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Privacy and
            <span className="text-green-600 dark:text-green-400"> Local Storage</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            From day one, LensFlowPro has been designed with strong attention to privacy and data security.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl">
              <Shield className="h-6 w-6 text-green-600 mb-3" />
              <h4 className="font-semibold mb-2">Local Storage</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Recorded video and audio files are stored locally on your device by default
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl">
              <Shield className="h-6 w-6 text-green-600 mb-3" />
              <h4 className="font-semibold mb-2">No Automatic Upload</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                The app will not automatically upload your recordings to any server
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl">
              <Shield className="h-6 w-6 text-green-600 mb-3" />
              <h4 className="font-semibold mb-2">Minimal Logging</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Only basic crash logs may be generated at the system level to help diagnose issues
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl">
              <Shield className="h-6 w-6 text-green-600 mb-3" />
              <h4 className="font-semibold mb-2">Controlled Sharing</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Information is only used for troubleshooting and product improvement when you choose to share
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section id="requirements" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <Monitor className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            System
            <span className="text-blue-600 dark:text-blue-400"> Requirements</span>
          </h2>
          
          <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl">
            <div className="space-y-4 text-left max-w-md mx-auto">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900 dark:text-white">Platform:</span>
                <span className="text-slate-600 dark:text-slate-300">macOS</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-900 dark:text-white">Supported versions:</span>
                <span className="text-slate-600 dark:text-slate-300">macOS 12.3 or later</span>
              </div>
            </div>
            
            <p className="mt-6 text-sm text-slate-600 dark:text-slate-300">
              For the best experience, using the latest version of macOS is recommended.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Compliance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Technical Compliance and
            <span className="text-blue-600 dark:text-blue-400"> Content Guidelines</span>
          </h2>
          
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl">
            <ul className="space-y-4 text-slate-600 dark:text-slate-300">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span>LensFlowPro is only for screen and audio recording. It does not include any unauthorized content downloading features.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span>It does not provide special functionality to bypass DRM or record protected streaming media.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span>The core use case is creating original content, such as tutorials, demos, courses, and training videos.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span>The app does not rely on background upload services and will not collect or transfer recordings without the user's knowledge.</span>
              </li>
            </ul>
            
            <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 text-center">
              Users should comply with local laws and regulations and the terms of use of each platform, 
              and only record content they are legally allowed to record.
            </p>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <Mail className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Support and
            <span className="text-blue-600 dark:text-blue-400"> Feedback</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            If you run into issues while using LensFlowPro, or have feature requests or ideas for improvements, feel free to contact the developer.
          </p>
          
          <div className="bg-blue-600 p-8 rounded-2xl text-white">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <a href="mailto:chenjianyu944@gmail.com" className="text-blue-100 hover:text-white underline text-lg">
              chenjianyu944@gmail.com
            </a>
            
            <div className="mt-6 text-left bg-blue-700/50 p-4 rounded-lg">
              <p className="text-sm mb-2 font-medium">When reaching out, it's helpful if you can also include:</p>
              <ul className="text-sm text-blue-100 space-y-1">
                <li>• Your macOS version</li>
                <li>• Your Mac model</li>
                <li>• A brief description of the issue or what you want to achieve</li>
                <li>• Screenshots or a short video, if available</li>
              </ul>
              <p className="text-sm mt-3 text-blue-100">
                This information helps diagnose problems more quickly and continuously improve the LensFlowPro experience.
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <a href="https://www.notion.so/User-Manual-2d681750f1e68004a9c7c9613f2a497d?pvs=21" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-6 py-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <span>📖</span>
              <span>User Manual</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Monitor className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">LensFlowPro</span>
            </div>
            <p className="text-slate-400 mb-6">
              Professional Mac screen recording for creators, educators, and developers.
            </p>
            <p className="text-slate-500 text-sm">
              &copy; 2024 LensFlowPro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}