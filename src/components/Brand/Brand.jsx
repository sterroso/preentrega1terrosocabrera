import { Button } from "react-daisyui";

const Brand = (args) => {
    const brandTitle = args.brandTitle;

    return (
        <div className="flex-1">
            <Button className="text-xl normal-case" color="ghost">
                { brandTitle }
            </Button>
        </div>
    )
}

export default Brand;