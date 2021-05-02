import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import html from 'remark-html'
import remark from 'remark'

const dataDir = join(process.cwd(), 'data')

export const getJobsSortedData = async (dir) => {
    try {
        const jobsDir = join(dataDir, 'jobs')
        const fileNames = readdirSync(jobsDir)
        const allJobsData = []

        for (const file of fileNames) {
            const company = file.replace(/\.md$/, '')
            const fileContents = readFileSync(join(jobsDir, file), 'utf8')
            const { data, content } = matter(fileContents)
            const processContent = await remark().use(html).process(content)
            const contentHtml = processContent.toString()
            allJobsData.push({ company, ...data, html: contentHtml })
        }

        return allJobsData.sort((a, b) => (a.date < b.date ? 1 : -1))
    } catch (error) {
        console.log(error.message)
        return null
    }
}
