
type Typo = {
    test: string,
}

export default function TypedPage() {

    const test: Typo = {
        test: 'I have type',
    }

    return <div>I'm a page, and {test.test}!</div>
}