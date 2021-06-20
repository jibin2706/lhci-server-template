module.exports = {
  ci: {
    server: {
      port: 9001,
      psiCollectCron: {
        psiApiKey: 'page speed insights api key',
        sites: [
          {
            label: 'jibin.tech',
            projectSlug: 'jibin.tech',
            schedule: '* */12 * * *', // twice every` day ref https://crontab.guru/#0_*/12_*_*_*
            numberOfRuns: 3,
            urls: ['https://jibin.tech', 'https://jibin.tech/blog'],
          },
        ],
      },
      storage: {
        sqlDialect: 'sqlite',
        sqlDatabasePath: './db.sql',
      },
    },
  },
}
