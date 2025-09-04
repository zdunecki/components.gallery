import { ButtonGroup } from "@shopify/polaris";

import IconDetails from "../../src/components/IconDetails";

import cn from "./styles.module.css";

interface TitleProps {
    title: string;
    badges?: string[];
    logo?: string;
    logoAlt?: string;
}

export function Title({ logo, title, badges, logoAlt }: TitleProps) {
    return (
        <div className={cn.Title}>
            {logo && <div className={cn.Logo}>
                <img
                    className={cn.Img}
                    crossOrigin="anonymous"
                    src={logo}
                    alt={logoAlt}
                />
            </div>
            }

            <div className="title">
                <div>
                    {title}
                </div>
                <ButtonGroup gap="extraTight">
                    {badges?.map((badge) => (
                        <IconDetails.Badge key={badge}>{badge}</IconDetails.Badge>
                    ))}
                </ButtonGroup>
            </div>
        </div>
    )
}