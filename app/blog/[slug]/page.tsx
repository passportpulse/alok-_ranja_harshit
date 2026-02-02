import { notFound } from 'next/navigation'
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react'
import Link from 'next/link'

// Blog posts data
const blogPosts = {
  'understanding-life-insurance-a-complete-guide-for-beginners': {
    id: 1,
    title: "Understanding Life Insurance: A Complete Guide for Beginners",
    excerpt: "Learn the fundamentals of life insurance, types of policies, and how to choose the right coverage for your family's needs.",
    author: "Alok Ranjan Basak",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Life Insurance",
    image: "https://picsum.photos/seed/insurance1/1200/600.jpg",
    content: `
# Understanding Life Insurance: A Complete Guide for Beginners

Life insurance is one of the most important financial decisions you'll make for your family's future. In this comprehensive guide, we'll walk you through everything you need to know about life insurance.

## What is Life Insurance?

Life insurance is a contract between you and an insurance company where you pay regular premiums, and in exchange, the insurance company pays a lump sum to your beneficiaries upon your death. This financial protection ensures that your loved ones are taken care of financially when you're no longer around.

## Types of Life Insurance

### 1. Term Life Insurance
Term life insurance provides coverage for a specific period, typically 10, 20, or 30 years. It's the most affordable type of life insurance and is ideal for:

- Young families with limited budgets
- People with temporary financial obligations
- Those who want maximum coverage at the lowest cost

### 2. Whole Life Insurance
Whole life insurance provides lifelong coverage and includes an investment component. It's more expensive but offers:

- Guaranteed death benefit
- Cash value accumulation
- Potential dividends
- Fixed premiums

### 3. Universal Life Insurance
Universal life insurance combines the death benefit of whole life with flexible premiums and adjustable death benefits. It offers:

- Flexible premium payments
- Adjustable death benefit
- Cash value accumulation
- Investment options

## How Much Coverage Do You Need?

A common rule of thumb is to have coverage equal to 10-15 times your annual income. However, the right amount depends on:

- Your current debts and obligations
- Your family's living expenses
- Future education costs for children
- Your retirement savings goals
- Your spouse's income potential

## Choosing the Right Policy

When selecting a life insurance policy, consider:

1. **Your Budget**: How much can you afford in premiums?
2. **Coverage Needs**: How much protection does your family need?
3. **Term Length**: How long do you need coverage?
4. **Health Status**: Your health affects premium costs
5. **Financial Goals**: What are your long-term financial objectives?

## Common Mistakes to Avoid

1. **Waiting Too Long**: Premiums increase with age
2. **Underinsuring**: Not having enough coverage
3. **Not Reviewing Regularly**: Life changes require policy updates
4. **Ignoring Riders**: Missing out on valuable add-ons
5. **Not Comparing Quotes**: Shopping around saves money

## The Application Process

1. **Research and Compare**: Get quotes from multiple providers
2. **Medical Exam**: Most policies require a health check-up
3. **Application Review**: The insurer assesses your risk profile
4. **Policy Issuance**: Your coverage begins once approved
5. **Premium Payments**: Set up regular payment schedule

## Conclusion

Life insurance is a crucial part of financial planning. It provides peace of mind knowing that your loved ones will be protected financially. Take the time to understand your options and choose a policy that meets your family's needs.

Remember, the best time to buy life insurance is now. The younger and healthier you are, the lower your premiums will be.
    `
  },
  'health-insurance-trends-in-2024-whats-new': {
    id: 2,
    title: "Health Insurance Trends in 2024: What's New?",
    excerpt: "Discover the latest trends in health insurance, including cashless treatments, wellness programs, and digital claim processes.",
    author: "Alok Ranjan Basak",
    date: "2024-01-10",
    readTime: "4 min read",
    category: "Health Insurance",
    image: "https://picsum.photos/seed/health2/1200/600.jpg",
    content: `
# Health Insurance Trends in 2024: What's New?

The health insurance landscape is rapidly evolving in 2024, with new technologies and consumer demands driving significant changes. Let's explore the key trends shaping the future of health insurance.

## Digital Transformation

### Telemedicine Integration
Health insurance providers are increasingly integrating telemedicine services, offering:

- Virtual consultations with doctors
- Remote monitoring for chronic conditions
- Digital prescription management
- Reduced healthcare costs

### AI-Powered Claims Processing
Artificial intelligence is revolutionizing claims processing:

- Automated claim verification
- Faster reimbursement times
- Reduced fraud detection
- Improved customer experience

## Personalized Coverage

### Customizable Plans
Insurers now offer more flexible options:

- Modular coverage options
- Pay-per-use services
- Family-specific plans
- Lifestyle-based pricing

### Wellness Programs
Preventive care is becoming central to health insurance:

- Fitness tracking integration
- Nutrition counseling
- Mental health support
- Incentive-based wellness rewards

## Cashless Treatment Expansion

### Hospital Network Growth
More hospitals are joining cashless networks:

- Expanded coverage areas
- Better hospital partnerships
- Improved service quality
- Reduced out-of-pocket expenses

### International Coverage
Global health insurance is becoming more accessible:

- Emergency medical evacuation
- International hospital networks
- Multi-country coverage options
- Travel health integration

## Regulatory Changes

### Standardization Efforts
New regulations are improving transparency:

- Standardized policy wording
- Clearer coverage definitions
- Better consumer protection
- Simplified claim processes

### Data Privacy Regulations
Stricter data protection is being implemented:

- Secure health data storage
- Patient consent requirements
- Data breach notifications
- Privacy-first design principles

## Emerging Technologies

### Blockchain in Health Insurance
Blockchain technology is enhancing security:

- Secure medical records
- Transparent claim processing
- Reduced administrative costs
- Improved data integrity

### IoT Health Monitoring
Internet of Things devices are changing healthcare:

- Wearable health trackers
- Remote patient monitoring
- Real-time health data
- Predictive health analytics

## Consumer Behavior Shifts

### Increased Health Awareness
Consumers are more health-conscious:

- Preventive care focus
- Holistic health approaches
- Mental health prioritization
- Lifestyle medicine adoption

### Demand for Transparency
Customers want clearer information:

- Easy-to-understand policies
- Transparent pricing
- Clear coverage details
- Honest communication

## Future Outlook

The health insurance industry will continue to evolve with:

- More personalized products
- Enhanced digital experiences
- Better preventive care integration
- Improved customer service

## Conclusion

2024 is an exciting year for health insurance innovation. These trends are making healthcare more accessible, affordable, and personalized for consumers. Stay informed about these changes to make the best decisions for your health coverage needs.

The future of health insurance is digital, personalized, and focused on preventive care. Embrace these changes to get the most value from your health insurance coverage.
    `
  },
  'motor-insurance-claims-dos-and-donts': {
    id: 3,
    title: "Motor Insurance Claims: Dos and Don'ts",
    excerpt: "Essential guidelines for filing motor insurance claims correctly and avoiding common mistakes that could lead to rejection.",
    author: "Alok Ranjan Basak",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Motor Insurance",
    image: "https://picsum.photos/seed/motor3/1200/600.jpg",
    content: `
# Motor Insurance Claims: Dos and Don'ts

Filing a motor insurance claim can be stressful, but knowing the right procedures can make the process smooth and successful. This comprehensive guide will help you navigate the claims process effectively.

## Immediate Actions After an Accident

### Do: Stay Calm and Safe
- Check for injuries and call emergency services if needed
- Move to a safe location if possible
- Turn on hazard lights
- Exchange information with other parties

### Don't: Admit Fault
- Avoid admitting responsibility at the scene
- Don't discuss fault with other drivers
- Let the insurance company determine liability
- Stick to factual information only

## Documentation Requirements

### Do: Gather Comprehensive Evidence
- Take photos of the accident scene
- Document vehicle damage from multiple angles
- Get witness contact information
- Record weather and road conditions
- Save all relevant documents

### Don't: Skip Important Details
- Don't forget to note time and location
- Don't overlook minor damages
- Don't ignore witness statements
- Don't lose police reports

## Claim Filing Process

### Do: File Promptly
- Report the accident immediately
- Contact your insurance company within 24 hours
- Submit all required documents
- Follow up regularly on claim status

### Don't: Delay Reporting
- Don't wait too long to file
- Don't miss submission deadlines
- Don't ignore communication from insurer
- Don't assume minor damage doesn't need reporting

## Common Claim Mistakes to Avoid

### 1. Incomplete Documentation
Missing documents can delay or reject your claim:
- Police reports
- Medical records
- Repair estimates
- Witness statements

### 2. Inconsistent Information
Providing conflicting information raises red flags:
- Stick to facts
- Be consistent in all statements
- Don't exaggerate damages
- Be honest about pre-existing damage

### 3. Unauthorized Repairs
Getting repairs without approval can cause issues:
- Get estimates first
- Obtain insurer approval
- Use authorized repair shops
- Keep all receipts

## Working with Insurance Adjusters

### Do: Cooperate Fully
- Provide requested information promptly
- Be available for inspections
- Answer questions honestly
- Maintain professional communication

### Don't: Be Difficult
- Don't refuse reasonable requests
- Don't be unresponsive
- Don't argue unnecessarily
- Don't withhold information

## Claim Settlement Negotiation

### Do: Know Your Rights
- Understand your policy coverage
- Know claim settlement procedures
- Be aware of time limits
- Understand appeal processes

### Don't: Accept Unfair Settlements
- Don't rush to accept first offers
- Don't settle for less than deserved
- Don't ignore your rights
- Don't sign without understanding

## Special Claim Situations

### Natural Disasters
Additional considerations for disaster claims:
- Document extensive damage
- Understand special provisions
- Be patient with processing times
- Keep all communication records

### Hit-and-Run Cases
Special handling for uninsured drivers:
- File police report immediately
- Document all available evidence
- Understand uninsured motorist coverage
- Consider legal advice

## Preventing Future Claims

### Safe Driving Practices
Reduce claim frequency through prevention:
- Follow traffic laws
- Maintain vehicle properly
- Avoid distracted driving
- Practice defensive driving

### Regular Maintenance
Prevent mechanical failure claims:
- Service vehicles regularly
- Address issues promptly
- Keep maintenance records
- Use quality parts

## Digital Claim Filing

### Online Claim Processes
Many insurers offer digital options:
- Mobile claim apps
- Online claim portals
- Digital document upload
- Real-time status tracking

### Benefits of Digital Claims
- Faster processing times
- Better documentation management
- Improved communication
- Enhanced transparency

## Conclusion

Successful motor insurance claims require knowledge, preparation, and patience. By following these dos and don'ts, you can navigate the claims process more effectively and increase your chances of a successful settlement.

Remember, honesty and thorough documentation are your best allies in the claims process. Stay informed, be prepared, and work cooperatively with your insurance provider for the best results.

Safe driving and proper maintenance can help you avoid claims altogether, but when they do happen, knowing the right procedures makes all the difference.
    `
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
          <div className="text-white max-w-4xl">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <div className="flex items-center text-sm">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm opacity-90">{new Date(post.date).toLocaleDateString('en-IN', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </section>

      {/* Article Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="container mx-auto">
          <div className="bg-white  p-8 md:p-12">
            {/* Excerpt */}
            <div className="text-lg text-gray-600 leading-relaxed mb-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-600">
              {post.excerpt}
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('#')) {
                  const level = paragraph.match(/^#+/)?.[0].length || 1
                  const text = paragraph.replace(/^#+\s/, '')
                  if (level === 1) {
                    return (
                      <h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                        {text}
                      </h1>
                    )
                  } else if (level === 2) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {text}
                      </h2>
                    )
                  } else {
                    return (
                      <h3 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                        {text}
                      </h3>
                    )
                  }
                } else if (paragraph.startsWith('###')) {
                  const text = paragraph.replace(/^###\s/, '')
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                      {text}
                    </h3>
                  )
                } else if (paragraph.startsWith('-')) {
                  return (
                    <li key={index} className="text-gray-700 mb-2 ml-4">
                      {paragraph.replace(/^-\s/, '')}
                    </li>
                  )
                } else if (paragraph.trim() === '') {
                  return <br key={index} />
                } else {
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  )
                }
              })}
            </div>

            {/* Share and Save */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
             
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>Category:</span>
                <span className="font-medium text-gray-700">{post.category}</span>
              </div>
            </div>
          </div>

       
        </div>
      </section>
    </div>
  )
}
