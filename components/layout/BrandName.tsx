import { site } from "../../src/config/site";

export default function BrandName() {
  return <span className="brand-label">{site.name}<span className="brand-period" aria-hidden="true">.</span></span>;
}
