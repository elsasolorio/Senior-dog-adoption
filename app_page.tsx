import Image from 'next/image'
import Layout from './components/layout'

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-pink-700 mb-6">Welcome to Senior Paws Adoption</h1>
        <p className="text-xl mb-8">Give a loving home to a senior dog and experience unconditional love!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">Why Adopt a Senior Dog?</h2>
            <ul className="list-disc list-inside text-left">
              <li>They're often already trained</li>
              <li>Calmer and less energetic</li>
              <li>Their personalities are fully developed</li>
              <li>You're giving them a second chance at happiness</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">How to Adopt</h2>
            <ol className="list-decimal list-inside text-left">
              <li>Browse our available dogs</li>
              <li>Fill out an application</li>
              <li>Meet your potential new friend</li>
              <li>Finalize the adoption</li>
              <li>Take your new companion home!</li>
            </ol>
          </div>
        </div>

        <Image 
          src="/placeholder.svg?height=300&width=400" 
          alt="Happy senior dog" 
          width={400} 
          height={300} 
          className="mx-auto rounded-lg shadow-md"
        />
      </div>
    </Layout>
  )
}

