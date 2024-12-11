import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Быстрый поиск партнёра',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        RunMate позволяет быстро и удобно найти партнёра для пробежек, учитывая
        ваше местоположение, уровень подготовки и предпочтения по маршруту.
        С нами вам больше не придётся бегать в одиночку!
      </>
    ),
  },
  {
    title: 'Сообщество бегунов',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Приложение помогает создавать сообщество единомышленников. Вы можете
        общаться с партнёрами в чате, планировать совместные пробежки, делиться
        результатами и поддерживать друг друга на пути к спортивным целям.
      </>
    ),
  },
  {
    title: 'Мотивация',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        С RunMate вы сможете отслеживать свои результаты, анализировать
        тренировки и сохранять мотивацию благодаря соревновательному духу.
        Развивайтесь вместе с партнёрами, используя точные данные о ваших
        достижениях.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
